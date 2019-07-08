var data = require("./data");

class Action {
  getList() {
    return data.getList();
  }
  postItem(item) {
    return data.postItem(item);
  }
  putItem(item) {
    return data.putItem(item);
  }
  delItem(id) {
    return data.delItem(id);
  }
  getItem(id) {
    return data.getItem(id);
  }
}

const action = new Action();
module.exports = action;
