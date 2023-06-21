     document.addEventListener('DOMContentLoaded', function () {
       var bar = new ProgressBar.Line('#progress', {
         strokeWidth: 4,
         easing: 'easeInOut',
         duration: 3000,
         color: '#FCB03C',
         trailColor: '#EEE',
         trailWidth: 4,
         svgStyle: {
           width: '100%',
           height: '100%'
         },
         from: {
           color: '#FCB03C'
         },
         to: {
           color: '#1ABC9C'
         },
         step: function (state, bar) {
           bar.setText(Math.round(bar.value() * 100) + '%');
           bar.path.setAttribute('stroke', state.color);
         }
       });
       var progressElement = document.getElementById('progress');
       progressElement.style.display = 'none';
       document.querySelector('#form-activity').addEventListener('submit', function (event) {
         event.preventDefault();
         get_activity(bar);
       });
     });

     function create_activity_row(activitiesTableBody, activityData, index) {
       //  let bgColor = index % 2 === 0 ? 'bg-info' : 'bg-light';
       let newRow = document.createElement('tr');
       //newRow.className = bgColor;
       activitiesTableBody.appendChild(newRow);

       let indexCol = document.createElement('td');
       indexCol.innerText = index;
       newRow.appendChild(indexCol);

       let activityCol = document.createElement('td');
       activityCol.innerText = activityData.activity;
       newRow.appendChild(activityCol);

       let typeCol = document.createElement('td');
       typeCol.innerText = activityData.type;
       newRow.appendChild(typeCol);

       let participantsCol = document.createElement('td');
       participantsCol.innerText = activityData.participants;
       newRow.appendChild(participantsCol);

       let priceCol = document.createElement('td');
       priceCol.innerText = activityData.price;
       newRow.appendChild(priceCol);
     }

     function add_header_row(activitiesTableBody) {
       let newRow = document.createElement('tr');
       newRow.className = 'bg-primary text-white';
       activitiesTableBody.appendChild(newRow);

       let indexHeaderCol = document.createElement('th');
       indexHeaderCol.scope = 'col';
       indexHeaderCol.innerText = 'Index';
       newRow.appendChild(indexHeaderCol);

       let activityHeaderCol = document.createElement('th');
       activityHeaderCol.scope = 'col';
       activityHeaderCol.innerText = 'Activity';
       newRow.appendChild(activityHeaderCol);

       let typeHeaderCol = document.createElement('th');
       typeHeaderCol.scope = 'col';
       typeHeaderCol.innerText = 'Type';
       newRow.appendChild(typeHeaderCol);

       let participantsHeaderCol = document.createElement('th');
       participantsHeaderCol.scope = 'col';
       participantsHeaderCol.innerText = 'Participants';
       newRow.appendChild(participantsHeaderCol);

       let priceHeaderCol = document.createElement('th');
       priceHeaderCol.scope = 'col';
       priceHeaderCol.innerText = 'Price';
       newRow.appendChild(priceHeaderCol);
     }

function get_activity(bar) {
  let activitiesTableBody = document.querySelector('#activities-table-body');
  activitiesTableBody.innerHTML = '';
  // add_header_row(activitiesTableBody);
  let alertBox = document.querySelector('#alert-box');
  
  let total_requests = document.querySelector('#total-suggestions').value;
  if (total_requests > 0) {
    let completed_requests = 0;
    // Start the progress bar animation
    var progressElement = document.getElementById('progress');
    progressElement.style.display = 'block';
    bar.set(0);
    bar.animate(1);

    function handleActivityResponse(activity) {
      create_activity_row(activitiesTableBody, activity, completed_requests + 1);
      completed_requests++;
      // Update the progress bar based on the completed requests
      let progress = completed_requests / total_requests;
      bar.set(progress);
      handleProgressBar();
    }

    function handleActivityError(error) {
      console.error(error);
      completed_requests++;
      // Update the progress bar based on the completed requests
      let progress = completed_requests / total_requests;
      bar.set(progress);
      handleProgressBar();

    }

    function handleProgressBar() {
      // Check if all requests have been completed
      if (completed_requests === (total_requests * 1)) {
        // All activities processed, wait for UI to update and then hide the progress element
        setTimeout(function () {
          progressElement.style.display = 'none';
        }, 1000); // Add a delay of 1 second before hiding the progress element
      }
    }
    for (var i = 0; i < total_requests; i++) {
      fetch('https://www.boredapi.com/api/activity', {})
        .then(response => response.json())
        .then(handleActivityResponse)
        .catch(handleActivityError);
    }

    return false;
  }
  else
  {
    alertBox.className = "d-block";
     setTimeout(function () {
       alertBox.className = 'd-none';
     }, 3000);
    }
    
}
     module.exports = {
       create_activity_row,
       add_header_row,
       get_activity
     };