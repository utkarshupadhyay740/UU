const users = [
    {
    id: 502,
    name: "Amit",
    course: "B.A",
    product: [102,103]
    },
    {
        id: 343,
        name: "Amir",
        course: "M.A",
        product: [101,105]
    },
    {
        id: 245,
        name: "Akash",
        course: "M.S.W",
        product: [105,101,102]
    },
];

const fetchUsers = () => {
    return users;
};                                     

export {
    fetchUsers
}