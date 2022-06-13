import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid, Typography, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { CustomButton } from '../../components/components-index';
import data from '../../utils/data';

import './contact.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR-SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    e.target.reset();
    alert('Message sent! 📨')
  };

  return (
    <Grid container className="contact">
      {/* Contact Form */}
      <Grid item>
        <Grid container>
          <Grid item className="section-title contact-form">
            <span></span>
            <h6 className="section-title-text">Contact Form</h6>
          </Grid>
          <Grid item xs={12}>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField name="name" label="Name" required fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField name="email" label="E-mail" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="message" label="Message" multiline rows={5} required fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Send" icon={<SendIcon />} type="submit" />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>

      {/* Contact Info */}
      <Grid item>
        <Grid container>
          <Grid item className="section-title contact-info-title">
            <span></span>
            <h6 className="section-title-text">Contact Details</h6>
          </Grid>

          <div className="contact-info-container">
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Address :  </span> {data.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Phone :  </span> {data.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>E-mail :  </span> {data.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contact-info-item">
                    <span>Skype :  </span> {data.socials['skype'].text}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="contact-info-socials">
                  <Grid container>
                    <a href={data.whatsApp.link} target="_blank" rel="noreferrer">{data.whatsApp.icon}</a>
                    {Object.keys(data.socials).map(key => (
                      <Grid item>
                        <a href={data.socials[key].link} target="_blank" rel="noreferrer">{data.socials[key].icon}</a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Map */}
      <Grid item xs={12} className="map-container">
        <iframe
          title="My Daily Marathon Tracker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.902039411138!2d2.291351491322737!3d48.85391001859122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701f7e8337b5%3A0xa2cb58dd28914524!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2sin!4v1655067519814!5m2!1sen!2sin" // Insert Your Location's Link Here
          className="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </Grid>
    </Grid>
  )
}

export default Contact;
