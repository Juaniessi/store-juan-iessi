import { 
    faThumbsUp,
    faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

const params = [
    {callback: (p1,p2) => {
        const prop = p1.createDate ? "createDate" : "_id"; //modifiqué el callback para que busque si el objeto tiene o no la propiedad createDate, si no lo tiene comparo por id y sino por creatreDate
        return (p1[prop]<p2[prop]) ? -1 : 1;
    }, wording: 'Most recent'},
    {callback: (p1,p2) => p1.cost - p2.cost, wording: 'Lowest price'},
    {callback: (p1,p2) => p2.cost - p1.cost, wording: 'Highest price'}
];

const coinsAlertMsj = {
	success: {
		className: 'success',
		icon: faThumbsUp,
		message: 'Coins added succesfully!',
	},
	error: {
		className: 'error',
		icon: faThumbsDown,
		message: 'We couldn´t add the credit, please try again later',
	},
};

export {params, coinsAlertMsj}; // se pone así sin el default  entre llaves