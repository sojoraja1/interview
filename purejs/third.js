//revealing module pattern
//Turn this object literal into a module that only exposes the render method

let myModule = {
    data: [],
    render: () => {

    },
    add: () => {

    },
    remove: () => {

    }
};

//do this

const myModule1 = (()=>{
  var data = [];
  var add = ()=>{
      console.log("i am add");
  }
    return {
        render:()=>{
           add();
        }
    }

})();


myModule1.render();



