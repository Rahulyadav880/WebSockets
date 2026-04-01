sabse pehle initialize the project by project.json
command for that is npm init -y 
since from now on we are writing the code in typescript so install ts
npm install typescript
now, install the typescript compiler
npx tsc --init
then change(commentout) the rootdir(for the ts code ./src) and outdir(for the js code ./dist) in tsconfig
finally create the src folder inside which create a file to write the code