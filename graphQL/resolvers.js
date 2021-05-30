const clients = [];
let counter = 1;

module.exports = {
  clients: () => {return clients;},

  client: (data) => {
    let cl = clients.find(client => client.id == data.id);
    if(cl == "undefined") cl = null;
    return cl
  },

  addClient: (data) => {
    const cl = {
      id:counter,
      name: data.name,
      phone: data.phone
    };
    counter++;
    clients.push(cl);
    return cl;
  }

}