const params = [
    {callback: (p1,p2) => {
        const prop = p1.createDate ? "createDate" : "_id"; //modifiqué el callback para que busque si el objeto tiene o no la propiedad createDate, si no lo tiene comparo por id y sino por creatreDate
        return (p1[prop]<p2[prop]) ? -1 : 1;
    }, wording: 'Most recent'},
    {callback: (p1,p2) => p1.cost - p2.cost, wording: 'Lowest price'},
    {callback: (p1,p2) => p2.cost - p1.cost, wording: 'Highest price'}
];

export {params}; // se pone así sin el default  entre llaves