import React, { FC } from 'react';
import StarsRating from 'react-star-ratings';

interface Irating {
    rating: number;
    count: number;
}

const RatingStar: FC<Irating> = ({ rating, count }) => {
    return (
        <div className="flex">
            <StarsRating
                rating={rating}
                starRatedColor="orange"
                starDimension="25px"
                starSpacing="2px"
            />
            <span>
                {rating} / {count} 참여
            </span>
        </div>
    );
};

export default RatingStar;
