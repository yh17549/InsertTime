# Insert Time

## package

```sh
npm install -g vsce
vsce package
```

## FAQ

1. Error1

> Error: Make sure to edit the README.md file before you publish your extension.  
> solution: modify README.md  

2. Error2

> Publish error : ERROR Missing publisher name.  
> solution: modify `package.json` , add `publisher`  
> eg:  

```json
"publisher": "abc"
```
