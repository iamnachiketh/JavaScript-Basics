// Ecma Script 09 which was introduced in 2018

// It has added some of the features like,

// Object.fromEntries() The function of the Object.fromEntries() method is to return an array of key value pairs of a given object

let hmap = new Map([
    ["Alex",20],
    ["John",22],
    ["Steve",19],
    ["Victor",20]
])

console.log(Object.fromEntries(hmap)); // Output: { Alex: 20, John: 22, Steve: 19, Victor: 20 }

// Optional Catch Binding

// The optional catch binding is a feature that was introduced in Ecma Script 09.

// If we dont want a error variable we dont have to mention '()'

async function apiCall(){
    try{
        let resp = await fetch("https://dummyapi.online/api/pokemon");
        let data = await resp.json();
        console.log(data);
    }catch{
        console.log("Error");
    }
}

apiCall();