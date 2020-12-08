const params = [
    {callback: (p1,p2) => (p1._id<p2._id) ? -1 : 1, wording: 'Más reciente'},
    {callback: (p1,p2) => p1.cost - p2.cost, wording: 'Precio Bajo'},
    {callback: (p1,p2) => p2.cost - p1.cost, wording: 'Precio Alto'}
];

export {params}; // se pone así sin el default  entre llaves