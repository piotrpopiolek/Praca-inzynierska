pragma solidity ^0.4.2;

contract SoccerToken {
    
    struct Bet{
        string name;
        uint256 multiply;
        address player;
        uint256 value;
        bool win;
        bool expire;
    }
    
    string public name = "Statistical Football Token";
    string public symbol = "SFT";
    address public manager;
    uint256 public totalSupply;
    uint256 stake= 10;
    mapping (address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    Bet[] public bets;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    constructor(uint256 initialSupply) public {
        totalSupply = initialSupply;
        balanceOf[msg.sender] = initialSupply;
        manager = msg.sender;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        return true;
    }
    
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;
        return true;
    }

    function pay() public returns (bool success) {
        require(balanceOf[msg.sender] >= stake);
        balanceOf[msg.sender] -= stake;
        balanceOf[manager] += stake;
        return true;
    }
    
    function payBet(uint256 value) private returns (bool success) {
        require(msg.sender != manager);
        require(balanceOf[msg.sender] >= value);
        balanceOf[msg.sender] -= value;
        balanceOf[manager] += value;
        return true;
    }

    function createBet(string name, uint256 multiply, address player, uint256 value) public returns (bool success){
        
        Bet memory newBet = Bet({
            name: name,
            multiply: multiply,
            player: player,
            value: value,
            win: false,
            expire: false
        });
        
        payBet(value);
        
        bets.push(newBet);
        return true;
    }
    
    function wonBet(uint index) public restricted returns (bool success) {
        Bet storage bet = bets[index];
        require(bet.expire != true);
        bet.win = true;
        bet.value = (bet.value * bet.multiply)/10;
        transfer(bet.player,bet.value);
        bet.expire = true;
        return true;
    }
    
    function lostBet(uint index) public restricted returns  (bool success) {
        Bet storage bet = bets[index];
        require(bet.expire != true);
        bet.win = false;
        bet.value = 0;
        bet.expire = true;
        return true;
    }
    
    function refundBet(uint index) public restricted returns  (bool success) {
        Bet storage bet = bets[index];
        require(bet.expire != true);
        bet.win = false;
        transfer(bet.player,bet.value);
        bet.expire = true;
        return true;
    }
}
