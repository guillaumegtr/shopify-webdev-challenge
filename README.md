# The Shoppies ๐ฅ

Front-end challenge for Shopify's Internship (Fall 2021)

Deployed here ๐ [The Shoppies](https://shopify-webdev-challenge.herokuapp.com/) via Heroku

## Presentation ๐ก

#### Home page

Where you can search and nominate movies
![home](./documentation/home_view.PNG)

#### Pretty nominations view

Acces to the pretty view for nominations
![nomination_button](./documentation/view_nominations.png)

#### Nominations and share

View and share nominations
![nominations_view](./documentation/nomination_view.PNG)

---

# Run locally

```sh
git clone https://github.com/guillaumegtr/shopify-webdev-challenge.git

npm install

npm run start
```

---

# Features ๐

I decided to build the following project using React Typescript and Redux โ. This is the web front-end framework that I have the most experience with.

**Simple and clean design is what I aimed for concerning UI/UX** ๐งผ

### Implemented features

- Search OMDB and display the results (movies, series and episodes)

- Add a movie from the search results to a nomination list

- Nominations are saved in local storage

- Remove a nomination from the list

## Technical requirements ๐ฏ

- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx) โ

- Each search result should list at least its title, year of release and a button to nominate that film โ

- Updates to the search terms should update the result list โ

- Movies in search results can be added and removed from the nomination list โ

- If a search result has already been nominated, disable its nominate button โ

- Display a banner when the user has 5 nominations โ

- Web app hosted (on Heroku) โ

## Extras done ๐

- Nomination list is saved when user leaves the page (browser's localStorage)

- Animations for loading, adding/deleting a nomination and notification sound when doing so

- Pretty view with extra details on nominated movies

- Shareable links
