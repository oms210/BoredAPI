# I am Bored

This is a simple web page that helps you find activities to do when you're bored. It makes use of the Bored API to fetch random activity suggestions based on your input.

## Usage

To use the application, follow these steps:

1. Open the web page in a browser.
2. Enter the number of activity suggestions you need in the input field labeled "How bored are you? Tell me how many suggestions you need."
3. Click the "Generate" button.

The application will fetch the specified number of activity suggestions from the Bored API and display them in a table. Each suggestion includes details such as the activity name, type, number of participants, and price level.

## Technologies Used

The application is built using the following technologies:

- HTML: The markup language used for structuring the web page.
- CSS: The styling language used to define the appearance of the web page.
- Bootstrap: A popular CSS framework used to enhance the design and responsiveness of the web page.
- JavaScript: The programming language used to add interactivity and functionality to the web page.
- Bored API: An API that provides random activity suggestions.

## Dependencies

The application requires the following dependencies:

- [Bootstrap CSS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css)
- [ProgressBar.js](src/progressbar.js)

Please make sure to include these dependencies in your project to ensure proper functionality.

## JavaScript Functions

The JavaScript code included in the web page provides the necessary functionality for fetching activity suggestions and updating the UI. Here are the main functions used:

- `create_activity_row`: Creates a new row in the activities table and populates it with data for a given activity.
- `add_header_row`: Adds a header row to the activities table.
- `get_activity`: Handles the form submission, fetches activity suggestions from the Bored API, and updates the progress bar and table accordingly.

## Custom Styling

The web page includes some custom styling defined in the `styles.css` file. It modifies the appearance of various elements to enhance the user interface.

Feel free to customize the styles according to your preferences by modifying the `styles.css` file.

## Credits

- This web page was created as a learning exercise and utilizes the Bored API to provide activity suggestions.
- Bootstrap CSS is used for styling the web page. Visit the [Bootstrap](https://getbootstrap.com/) website for more information.
- ProgressBar.js is used to display a progress bar during the activity suggestion fetching process. Visit the [ProgressBar.js](https://progressbarjs.readthedocs.io/) documentation for more details.

---

To download or install the dependencies required for the application, follow these steps:

1. Bootstrap CSS: You can download the Bootstrap CSS file by visiting the [Bootstrap website](https://getbootstrap.com/) and clicking on the "Download" button. Alternatively, you can include it in your project by using a Content Delivery Network (CDN) link. Add the following line to the `<head>` section of your HTML file:

   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
