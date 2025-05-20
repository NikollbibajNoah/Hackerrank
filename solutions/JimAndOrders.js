function jimOrders(orders) {
  // Write your code here

  let result = [];
  const customers = {};
  for (let i = 0; i < orders.length; i++) {
    const customer = orders[i];

    if (!customers[i + 1]) {
      customers[i + 1] = {
        order: customer[0],
        time: customer[1],
        deliver: customer[0] + customer[1],
      };
    }
  }

  //Convert object to array
  const entries = Object.entries(customers);

  //Sort by deliver time
  entries.sort((a, b) => a[1].deliver - b[1].deliver);

  //Extract only the customer id
  entries.map((e) => {
    result.push(Number(e[0]));
  });

  return result;
}

console.log(
  jimOrders([
    [1, 3],
    [2, 3],
    [3, 3],
  ])
); // 1 2 3
console.log(
  jimOrders([
    [8, 1],
    [4, 2],
    [5, 6],
    [3, 1],
    [4, 3],
  ])
); // 4 2 5 1 3
