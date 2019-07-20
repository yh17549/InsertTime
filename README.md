# InsertTime

InsertTime is the plugin for vscode which can insert current time at the location of cursor.

## command

* Insert Time

> insert current time, the time format is `yy-MM-dd HH:mm:ss`

## How to package

```sh
npm install -g vsce
vsce package
```


## Error and Solution


* Error: Make sure to edit the README.md file before you publish your extension.  

  > modify README.md  


* Publish error : ERROR Missing publisher name.  

  > solution: modify `package.json` , add `publisher`  

  >  eg:  
  ```json
  "publisher": "publisher_name"
  ```

