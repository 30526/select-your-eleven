import dltImg from '../../assets/Vector.png'

const SelectedPlayers = ({ purchasePlayers, setPurchasePlayers,
    availableBalance, setAvailableBalance, setToggle
}) => {
    const handleDelete = (player) => {
        const remainingPlayer = purchasePlayers.filter(players => players !== player)
        setPurchasePlayers(remainingPlayer)
        setAvailableBalance(availableBalance + player.price)



    }
    return (
        <div className='max-w-[1200px] mx-auto px-4 md:px-0'>
            {
                purchasePlayers.map(player => <div>
                    <div className='border-2 border-gray-300 p-5 rounded-2xl flex justify-between items-center
                    mb-3'>
                        <div className='flex items-center gap-3'>
                            <img className='w-[100px] rounded-lg object-cover h-[80px]' src={player.image_url} alt="" />
                            <div>
                                <h2 className='font-bold text-xl'>{player.player_name}</h2>
                                <p className='text-lg text-gray-500'>{player.batting_style}</p>
                            </div>
                        </div>


                        <button onClick={() => handleDelete(player)} className='hover:cursor-pointer'><img src={dltImg} alt="Deleted icon" /></button>
                    </div>
                </div>
                )
            }
            <button onClick={() => setToggle(true)} className='btn bg-[#E7FE29] font-bold rounded-lg'>Add More Player</button>

        </div >
    );
};

export default SelectedPlayers;