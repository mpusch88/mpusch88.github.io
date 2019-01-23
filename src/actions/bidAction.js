import { webRequest } from '../helpers/http';

export const addNewBid = (bid) => {
    return {
        type: 'ADD_BID', bid
    };
};

export const addBid = (jobId, clientId, lawyerId) => {
    return (dispatch) => {
    return webRequest()
        .post('/bid', {
            jobId,
            clientId,
            lawyerId
        })
        .then((response) => {
            let bid = response.data;
            dispatch(addNewBid(bid));
            return bid;
        })
        .catch((err) => {
            console.log(err);
        });
    };
};