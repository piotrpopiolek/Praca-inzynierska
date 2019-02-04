pragma solidity ^0.4.2;

contract SoccerToken {
    string public name = "Statistical Football Token";
    string public symbol = "SFT";
    address public manager;
    uint256 public totalSupply;
    uint256 stake= 10;
    mapping (address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

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
    
    function pay() public returns (bool success) {
        require(balanceOf[msg.sender] >= stake);
        balanceOf[msg.sender] -= stake;
        balanceOf[manager] += stake;
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
}
