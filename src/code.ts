import { from } from "rxjs/Observable/from";
import { merge } from "rxjs/Observable/merge";
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/map";

var observable = from([{name: 'vutivi', surname: 'shivambu'},
    {name: 'Ntlakuko', surname: 'shivambu'},
    {name: 'Vangama', surname: 'shivambu'},
    {name: 'Shongi', surname: 'shivambu'}
]);

var observable2 = from([{name: 'vutivi', surname: 'shivambu'},
    {name: 'Ntlakuko', surname: 'shivambu'},
    {name: 'Vangama', surname: 'shivambu'},
    {name: 'Shongi', surname: 'shivambu'}
]);

var newObs = merge(observable, observable2);

newObs.pluck('name')
    .map((x: any) => x + 9)
    .subscribe((x: any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}