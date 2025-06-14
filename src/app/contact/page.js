export const metadata = {
    title: "Contact Us",
    description: "Generated by create next app",
  };
  
  // https://superface.ai/blog/contact-form-nextjs-email

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch('/api/contact.js', {
        method: 'post',
        body: new URLSearchParams(data),
      });
      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert('Thanks for contacting us, we will get back to you soon!');
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

    return (
      <section id="contact">
      <div className="row">
      <div className="col">
      <form className="container">
      <h1>Get in touch</h1>
      <div className="emailblock">
        <label htmlFor="frm-email">Email</label>
        <br />
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="phoneblock">
        <label htmlFor="frm-phone">Phone</label>
        <br />
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="nameblock">
        <div>
          <label htmlFor="frm-first">First Name</label>
          <br />
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <br />
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className="messageblock">
        <label htmlFor="frm-message">Message</label>
        <br />
        <textarea id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className="buttonblock">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    <div className="col1">
    <h1>Tel:(01321) 2340 235</h1>
    <br />
    <h1> Fax: (01321) 2340 236</h1>
    <br />
    <h1>Email: info@cantorcollege.ac.uk</h1>
    </div>
    </div>
    </section>
    );
  }