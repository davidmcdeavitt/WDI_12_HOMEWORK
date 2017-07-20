describe Zombie do
  it 'is invalid without name' do
    zombie = Zombie.new
    expect(zombie).to_not be_valid
  end
#   it 'is invalid without password' do
#     zombie = Zombie.new(name: 'Frank')
#     # zombie = Zombie.new           These lines same as one above
#     # zombie.name = 'Frank'
#     expect(zombie).to_not be_valid
#   end
#
#   it 'is invalid when password has less than 8 characters' do
#     zombie = Zombie.new(name:'Frank', password: '1234567')
#     expect(zombie).to_not be_valid
#   end
# end
context 'when it has a name' do
  let(:zombie) {Zombie.new(name: 'Frank')}

  it 'is invalid without password' do
    # zombie = Zombie.new           These lines same as one above
    # zombie.name = 'Frank'
    expect(zombie).to_not be_valid
  end

  it 'is invalid when password has less than 8 characters' do
    zombie.password = '1234567'
    expect(zombie).to_not be_valid
  end
  end
end
