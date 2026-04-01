sabse pehle initialize the project by project.json
command for that is npm init -y 
since from now on we are writing the code in typescript so install ts
npm install typescript
now, install the typescript compiler
npx tsc --init
then change(commentout) the rootdir(for the ts code ./src) and outdir(for the js code ./dist) in tsconfig
finally create the src folder inside which create a file to write the code

Question - Which library will we use for the websocket?
Ans- Since, we have used express for http(which is one of the many libraries for http), just like that we will use "ws" library for the websocket, So
npm i ws @types/ws  (install ws and also type for it since we are writing the code in ts)

while import statement you will notice some red squiggly(error) how to fix that?
sol- package.json → "type": "module"
module → NodeNext
moduleResolution → NodeNext
types → ["node"]
verbatimModuleSyntax → false

main things - "type": "module" in package.json and "verbatimModuleSyntax": false
in tsconfig.json
always set this in package.json and tsconfig.json