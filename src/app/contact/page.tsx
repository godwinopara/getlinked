import S from './page.module.css'

const Contact = () => {
  return (
      <section className={S.contactWrapper}>
          <div className={S.contact}>
            <div>
                <h1 className={S.contactHeading}>Get in touch</h1>
                <p className={S.para1}>Contact <br /> Information</p>
                <p className={S.para2}>
                    27,Alara Street <br />
                    Yaba 100012   <br />
                    Lagos State
                </p>
                <p className={S.para3}>Call Us : 07067981819</p>
                <p className={S.para4}>
                    we are open from Monday-Friday <br />
                    08:00am - 05:00pm
                </p>
                <div>
                    <span>Share on</span>
                </div>
            </div>
            <form>
                <h2 className={S.formHeading}>Questions or need assistance <br /> Let us know about it</h2>
                <input className={S.input} type="text" name="firstname" placeholder='First Name' />
                <input className={S.input} type="email" name="mail" placeholder='Mail' />
                <textarea className={S.input} name="message" placeholder='Message' cols={30} rows={10}></textarea>
                <button>Register</button>
            </form>
          </div>
    </section>
  )
}

export default Contact
