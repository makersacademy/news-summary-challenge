const Utils = {
  parseRequestURL: function() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');

    //create request object to return from this function
    let request = {
      resource: null,
      id: null
    };

    //assign url elements after #
    request.resource = r[0];
    request.id = r[1];

    return request;
  }
};

export default Utils;
