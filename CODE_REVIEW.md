### books-data-access module

* For `State` interface, type of `error` is `string | null`. But in `books.actions.ts`, it's type is `any`.
* When user clear the input, the app will also clear the results that show on the page. It's not ok. App still should keep consistency - keep showing results on the page before next search request submit, no matter clear the input or not. And when user submit a empty input, app should display the previous search result on the page.
* When user input some book name which is not in database, the search result still show the previouse search result, it's not ok. It should display "Sorry, can't find your book.", or some information like that.
* Should put interface to shared `models.ts` in case they will be invoked in other files.
* Should create a service use to put http request method and invoked them in other files.
* Should separate *books* state and *reading-list* state, and put them into different folders in *+state*.

---

### books-feature module

* The better way to modify date in **.html* is use pipe by interpolation.
* None of the subscriptions has been unsubscribed, this is gonna cause the app to leak memory. 
* Shouldn't use `async pipe`, we should keep using `subscirbe` in ngOnInit for consistency.
* No need to import `RouterModule`. it can be removed in `books-feature.module.ts`.
* Should declare type for variable, function paramter, return, even if return is `void`. That's for consistency.

---

### Accessibility
* Should add `<!DOCTYPE html><html lang="en">` in `app.component.html`. To declare the language of the Web page, and assist search engines and browsers.
* In `book-search.component.html` and `reading-list.component.html`. Missing `[alt]` alternative text for images elements.
* `<div class="reading-list-content"><tmo-reading-list></tmo-reading-list></div>` in `app.component.html` should be wraped by `<aside></aside>` semantic tag.
* Input element in `book-search.component.html` needs to use `title` attribute.  
* Lots parts in webpage can't be selected by using tab key. For example, book title name in search result.It's not convenient for disabled people. To fix them by using `[tabindex]`and `[attr.aria-label]` to improve  accessibility.
* App has some contrast problems.
* **Through modify the code, I improved the Accessibility score to 100**.

---

### Unit test

* There are two unit tests failed in `reading-list.reducer.spec.ts`, because initial test state only have **'A'** & **'B'** , so if we wan to test `failedAddToReadingList`, we should add a new item (**'C'**), if state still only have **'A'** & **'B'** , the test pass. For test `failedRemoveFromReadingList`, we should remove item (**'B'**), if state still only have **'A'** & **'B'**, the test pass.

---

### Lint test

* All pass