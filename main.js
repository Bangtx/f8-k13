const positions = ['Sale', 'Hr', 'Warehouse', 'Accountant', 'Director'];
const employees = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Employee ${index + 1}`,
    age: Math.floor(Math.random() * 30) + 20, // random age between 20 and 50
    address: `Address ${index + 1}`,
    salary: Math.floor(Math.random() * 5000) + 3000, // random salary between 3000 and 8000
    position: positions[Math.floor(Math.random() * positions.length)],
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
}));

const products = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    shortName: `P${index + 1}`,
    code: `PRD-${1000 + index}`,
    expectedPrice: Math.floor(Math.random() * 500) + 50, // random price between 50 and 550
    description: `Description for product ${index + 1}`,
    color: Math.floor(Math.random() * 20) + 1, // random color between 1 and 20
}));

console.log(JSON.stringify(products));
// console.log(products);