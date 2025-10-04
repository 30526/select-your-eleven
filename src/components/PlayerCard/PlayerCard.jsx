import React, { useState } from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/flag.png'
import { toast } from 'react-toastify';

const PlayerCard = ({ player, setAvailableBalance, availableBalance,
    purchasePlayers, setPurchasePlayers
}) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleSelected = (player) => {
        if (availableBalance < player.price) {
            toast('Unavailable balance!')
            return;
        }
        if (purchasePlayers.length === 6) {
            toast('You cannot add more players!')
            return;
        }
        toast('Player Added!')
        setIsSelected(true)
        setAvailableBalance(availableBalance - player.price)
        const newPurchasePlayer = [...purchasePlayers, player]
        setPurchasePlayers(newPurchasePlayer)
    }
    return (
        <div className="card bg-base-100 border-1 
             border-gray-200 p-4 rounded-2xl">
            <figure>
                <img className='rounded-xl w-full h-[190px] object-cover'
                    src={player.image_url}
                    alt="Shoes" />
            </figure>
            <div className="mt-5">
                <div className='flex items-center gap-1'>
                    <img className='h-[20px]' src={userImg} alt="User Icon" />
                    <h2 className="card-title font-bold text-xl">{player.player_name}</h2>
                </div>
                <div className='flex justify-between items-center mt-4 mb-2  border-b-1 border-gray-100 pb-4'>
                    <div className='flex gap-2 items-center'>
                        <img className='h-4 text-white' src={flagImg} alt="Flag icon" />
                        <span className='text-gray-500 font-medium'>{player.country}</span>
                    </div>
                    <div className='bg-gray-100 py-1 px-5 rounded-md '>
                        <p className=''>{player.playing_role}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-lg font-semibold'>Rating</span>
                    <span className='text-lg font-semibold text-gray-500'>{player.rating}</span>
                </div>
                <div className='flex items-center justify-between my-2'>
                    <span className='text-lg font-semibold'>Batting Style</span>
                    <span className='font-semibold text-gray-500'>{player.batting_style}</span>
                </div>
                <div className="card-actions justify-between items-center">
                    <p className='text-lg font-semibold'>Price: ${player.price}</p>
                    <button className="btn bg-white hover:bg-[#E7FE29]"
                        disabled={isSelected}
                        onClick={() => {
                            handleSelected(player)
                        }}>{isSelected ? 'Selected' : 'Select Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;