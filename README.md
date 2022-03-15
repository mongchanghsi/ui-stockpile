# UI-Stockpile

This repository and website serves as a platform for my friends and I
to add in any interesting custom-built UI to be documented here. This
will allow us to simply refer to here instead of recalling what was
the name of the component or which repository did the component
resides in. Please feel free to do a PR and contribute to this
repository!

Live website is hosted on [https://ui-stockpile.vercel.app/](https://ui-stockpile.vercel.app/)

## How to contribute

1. You can simply copy one of exist components folders `AzukiGridDisplay` or `Accordion` and renames the subfolders inside.
2. You should separate any sub-components into its own individual components as well as its stylings.
3. For the base template (such as `./components/AzukiGridDisplay/index.tsx`), include in a title and a description and subsequently you may edit the `styles.main` class to your requirement for the component.
4. You should include unit tests.
5. Once your component has added, you can add your component in `./pages/index.tsx`.
6. Subsequently, please open a PR.
7. Once the PR is merged into the `master` branch, the website will automatically be redeployed.
