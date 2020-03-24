import React, { useEffect } from 'react'
import DownloadEosIcons from '../components/DownloadEosIcons'
import Prism from 'prismjs';

const Docs = () => {

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <div>
      <div className="container">
        <div>
          <h1>Installing EOS icons</h1>
          <p>There are several options for you to use EOS icons in your product:</p>
          <div>
            <h2> Installing with npm </h2>

            <pre className="code language-shell">
              <code>
                npm install eos-icons --save
              </code>
            </pre>
          </div>
          <div>
            <h2>With our CDN</h2>
            <p>For EOS set:
              <a href="https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css"
                data-event-category="External link"
                data-event-action="Link to EOS Icons CDN"
                data-event-label="Docs page"
                target="_blank"
                rel="noopener noreferrer"> https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css
                </a>
            </p>

            <pre className="code language-html">
              <code>
                {`<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css' />`}
              </code>
            </pre>
            <p>For Extended EOS set:
              <a href="https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css"
                data-event-category="External link"
                data-event-action="Link to EOS Icons Extended CDN"
                data-event-label="Docs page"
                target="_blank"
                rel="noopener noreferrer"> https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css
              </a>
            </p>

            <pre className="code language-html">
              <code>
                {`<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css' />`}
              </code>
            </pre>
            <p>
              Import them in your <span className="command"> &lt;head&gt;</span> tag as <span className="command"> link:css </span>.
            </p>
          </div>
          <div>
            <h2>or Download EOS as a zip file</h2>
            <p>
              To download the zip file of <span className="command"> /dist</span> folder click
              <a href="https://gitlab.com/SUSE-UIUX/eos-icons/-/archive/master/es-icons-master.zip?path=dist"
                data-event-category="External link"
                data-event-action="Link to EOS Icons zip file"
                data-event-label="Docs page"
                target="_blank"
                rel="noopener noreferrer"> here
              </a>
            </p>
          </div>
        </div>
        <div>
          <h1>Using EOS icons in your projects</h1>
          <p>Just like in any other iconic font, you need to add the Fonts and CSS files in your project:</p>
          <p>
            1- Add the <span className="command">eos-icons.css</span> file available under the dist/css folder into your project's <span className="command"> &lt;head&gt;</span>:
          </p>

          <pre className="code language-html">
            <code>
              {`<link rel='stylesheet' href='assets/eos-icons.css'/>`}
            </code>
          </pre>
          <p>
            2- Make sure the font files available in <span className="command">thedist/fonts</span> folder are placed under your <span className="command">assets/fonts</span> folder so the .css file can read them correctly.
          </p>
          <p>
            3- Use the icons in your html as follows:
          </p>

          <pre className="code language-html">
            <code>
              {`<i class='eos-icons'>LIGATURE_OF_THE_ICON</i>`}
            </code>
          </pre>
          <p>
            Where the LIGATURE_OF_THE_ICON is the name of the icon. Use our &nbsp;
            <a href="https://eos-icons.eosdesignsystem.com/cheatsheet.html"
              data-event-category="Internal link"
              data-event-action="Link to cheatsheet"
              data-event-label="Docs page"
              target="_blank"
              rel="noopener noreferrer"> cheatsheet
            </a>
            &nbsp; to see the icon's name.
          </p>
        </div>
        <div>
          <h1>Using Animated icons</h1>
          <p>
            The animated EOS icons are built using CSS animations. To implement them you don't need ligatures but classes instead. For example:
          </p>

          <pre className="code language-html">
            <code>
              {`<i class='eos-icons eos-icon-loading'>loading</i>`}
            </code>
          </pre>
          <p>
            See the other animated icons classes in our
            <a href="https://eos-icons.eosdesignsystem.com/cheatsheet.html"
              data-event-category="Internal link"
              data-event-action="Link to cheatsheet (animated)"
              data-event-label="Docs page"
              target="_blank"
              rel="noopener noreferrer"> demo page
            </a>
            . Click on the icon you want to use to see the codes snippet.
          </p>
        </div>
        <div>
          <h1>EOS extended version with Material Design</h1>
          <p>
            Since EOS icons are designed following the&nbsp;
            <a href="https://material.io/design/iconography/system-icons.html"
              data-event-category="External link"
              data-event-action="Link to MD icons design principles"
              data-event-label="Docs page"
              target="_blank"
              rel="noopener noreferrer"> Material Design guidelines
            </a>
            &nbsp;and made to work together with Material Icons, we decided to include an extended version of EOS icons for easy implementation.
          </p>
          <p>
            With the extended version you only need to use 1 class for all icons (EOS and Material Design).
            To implement it, you need to grab the <span className="command"> css/ </span> and<span className="command"> font/ </span> folders available atdist/extended,
            then add theeos-icons-extended.cssunder the <span className="command"> &lt;head&gt;</span> of your project accordingly.
          </p>
          <p>
            For more information about Material Design Icons, please refer to the &nbsp;
            <a href="https://github.com/google/material-design-icons"
              data-event-category="External link"
              data-event-action="Link to MD icons main page"
              data-event-label="Docs page"
              target="_blank"
              rel="noopener noreferrer">original MD icons repository
            </a>
            &nbsp;where you can find the corresponding licensing and documentation. Example:
          </p>

          <pre className="code language-html">
            <code>
              {`
  <!-- This is an EOS icon -->
  <i class='eos-icons'>action_chains</i>

    <!-- This is a Material Design icon -->
  <i class='eos-icons'>bluetooth_disabled</i>
  `}
            </code>
          </pre>
        </div>
        <div>
          <h1>Our recommended sizes</h1>
          <p>Both MD icons and EOS icons have been designed to work and look perfect at: 18px, 24px, 36px, and 48px.</p>
          <p>In order to be compliant, follow MD icons class names to size both MD icons and EOS icons:</p>
          <div>
            <h2>Implementation Examples</h2>
            <ul>
              <li>
                <h4>Implementation example with MD icon</h4>
              </li>
              <i className="eos-icons md-18 mr-3">face</i>
              <i className="eos-icons md-24 mr-3">face</i>
              <i className="eos-icons md-36 mr-3">face</i>
              <i className="eos-icons md-48">face</i>


              <pre className="code language-html">
                <code>
                  {`<i class='eos-icons md-18'>face</i>
<i class='eos-icons md-24'>face</i>
<i class='eos-icons md-36'>face</i>
<i class='eos-icons md-48'>face</i>`}
                </code>
              </pre>
              <li>
                <h4>Implementation example with EOS icon</h4>
              </li>
              <i className="eos-icons md-18 mr-3">miscellaneous</i>
              <i className="eos-icons md-24 mr-3">miscellaneous</i>
              <i className="eos-icons md-36 mr-3">miscellaneous</i>
              <i className="eos-icons md-48">miscellaneous</i>
              <pre className="code language-html">
                <code>
                  {`<i class='eos-icons md-18'>miscellaneous</i>
<i class='eos-icons md-24'>miscellaneous</i>
<i class='eos-icons md-36'>miscellaneous</i>
<i class='eos-icons md-48'>miscellaneous</i> `}
                </code>
              </pre>
              <h4>SCSS code snippet</h4>


              <pre className="code language-css">
                <code>
                  {`/* size variables */
$eos-md-18: 18px;
$eos-md-24: 24px;
$eos-md-36: 36px;
$eos-md-48: 48px;

/* Rules for sizing the icon. */
.md-18 { font-size: $eos-md-18; }
.md-24 { font-size: $eos-md-24; }
.md-36 { font-size: $eos-md-36; }
.md-48 { font-size: $eos-md-48; }  `}
                </code>
              </pre>
            </ul>
          </div>
          <p>
            EOS icons is open source.
            Go to our Gitlab repository to find out more :
            <a href="https://gitlab.com/SUSE-UIUX/eos-icons"
              data-event-category="External link"
              data-event-action="Link to Gitlab repository"
              data-event-label="Docs page"
              target="_blank"
              rel="noopener noreferrer"> https://gitlab.com/SUSE-UIUX/eos-icons
            </a>
          </p>
        </div>
      </div>
      <DownloadEosIcons />
    </div>
  )
}

export default Docs
