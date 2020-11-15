import React from 'react';

function Contact(props) {
    return(
<>
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
        <div class="container">
            <div class="row marginBottom">
                <div class="col-lg-8 contact">
                    <h1 class="font-40 bold">Let&rsquo;s Work Together</h1>
                    <hr />
      <form action="/action_page.php">
        <label for="fname">Name:</label><br />
        <input class="formInput" type="text" id="fname" name="fname" placeholder="John Smith" /><br /><br />
        <label for="fname">Email:</label><br />
        <input class="formInput" type="text" id="email" name="email" placeholder="example@gmail.com" /><br /><br />
        <label for="fname">Message:</label><br />
        <textarea class="formInput" id="message" name="message" placeholder="What can I do for you?" style={{height: "170px; width: 100%"}}></textarea><br />
        <br />
        <button type="button" class="btn btn-success">Submit</button>
      </form>
      </div>
    </div> 
  </div> 
</>
    );
}

export default Contact;