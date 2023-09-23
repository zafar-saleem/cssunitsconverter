## Description
This folder contains list of packages required for all the pages.

## Adding a package
Follow steps below in order to add a new package.

1. Create a folder with package name such as `Tabs`.
2. Add below files inside this(Tabs) folder.
   1. `index.ts`
   2. `Tabs.tsx`
   3. `package.json`
      1. Add below contents inside `package.json` file.
      2. ```
         {
           "main": "index.ts",
           "name": "@/Tabs"
         }
         ```
3. Now run `yarn` in the root folder of this project.
