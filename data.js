let list = [
  {
    id: "000001",
    name: "中国平安"
  },
  {
    id: "000002",
    name: "中国万科"
  }
];

class Data {
  getList() {
    return list;
  }
  getItem(id) {
    const res = list.filter(item => item.id === id);
    return res.length ? res[0] : [];
  }
  delItem(id) {
    list = list.filter(item => item.id !== id);
    return list;
  }
  putItem(params) {
    list = list.map(item =>
      item.id === params.id
        ? {
            ...item,
            ...params
          }
        : item
    );
    return list;
  }
  postItem(params) {
    list.push(params);
    return list;
  }
}

const data = new Data();
module.exports = data;
