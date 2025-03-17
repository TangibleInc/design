export default function FormExample() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john.doe@gmail.com"
        />
      </p>
      <p>
        <label for="id">User id (read only)</label>
        <input readonly name="id" id="id" value="04D6H89Z" />
      </p>
      <p>
        <label for="disabled">Random disabled input</label>
        <input
          disabled
          name="disabled"
          id="disabled"
          placeholder="Because why not?"
        />
      </p>
      <p>
        <label for="about">About me</label>
        <textarea
          name="about"
          id="about"
          placeholder="I am a textarea..."
        ></textarea>
      </p>
      <p>
        {/* TODO: Proper HTML markup for radio group */}
        <label>Choose a radio:</label>
        <div>
          <input type="radio" id="john" name="drone" value="john" checked />
          <label for="john">John Doe</label>
        </div>
        <div>
          <input type="radio" id="jane" name="drone" value="jane" checked />
          <label for="jane">Jane Doe</label>
        </div>
        <div>
          <input type="radio" id="johnny" name="drone" value="johnny" checked />
          <label for="johnny">Johnny Doe</label>
        </div>
      </p>

      <p>
        <label>Checkboxes</label>
        <div>
          <input type="checkbox" name="unchecked" id="unchecked" />
          <label for="unchecked">Unchecked</label>
          <input type="checkbox" name="remember" id="remember" checked />
          <label for="remember">Remember me</label>
        </div>
      </p>

      <p>
        <input type="submit" />
      </p>
      <hr />
      <p>
        <label htmlFor="search">Search</label>
        <input type="search" id="search" name="search" placeholder="Search" />
      </p>
      <p>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" name="text" placeholder="Text" />
        <br />
        <small>Curabitur consequat lacus at lacus porta finibus.</small>
      </p>
      <p>
        <label htmlFor="select">Select</label>
        <select id="select" name="select" required defaultValue={1}>
          <option value={1} selected>
            Select…
          </option>
          <option>…</option>
        </select>
      </p>
      <p>
        <label htmlFor="file">
          File browser
          <input type="file" id="file" name="file" />
        </label>
      </p>
      <p>
        <label htmlFor="range">
          Range slider
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={50}
            id="range"
            name="range"
          />
        </label>
      </p>
      <div className="grid">
        <p>
          <label htmlFor="valid">
            Valid
            <input
              type="text"
              id="valid"
              name="valid"
              placeholder="Valid"
              aria-invalid="false"
            />
          </label>
        </p>
        <p>
          <label htmlFor="invalid">
            Invalid
            <input
              type="text"
              id="invalid"
              name="invalid"
              placeholder="Invalid"
              aria-invalid="true"
            />
          </label>
        </p>
        <p>
          <label htmlFor="disabled">
            Disabled
            <input
              type="text"
              id="disabled"
              name="disabled"
              placeholder="Disabled"
              disabled
            />
          </label>
        </p>
      </div>
      <div className="grid">
        <p>
          <label htmlFor="date">
            Date
            <input type="date" id="date" name="date" />
          </label>
        </p>
        <p>
          <label htmlFor="time">
            Time
            <input type="time" id="time" name="time" />
          </label>
        </p>
        <p>
          <label htmlFor="color">
            Color
            <input
              type="color"
              id="color"
              name="color"
              defaultValue="#abcdef"
            />
          </label>
        </p>
      </div>
      <div className="grid">
        <fieldset>
          <legend>
            <strong>Checkboxes</strong>
          </legend>
          <label htmlFor="checkbox-1">
            <input
              type="checkbox"
              id="checkbox-1"
              name="checkbox-1"
              defaultChecked
            />
            Checkbox
          </label>
          <label htmlFor="checkbox-2">
            <input type="checkbox" id="checkbox-2" name="checkbox-2" />
            Checkbox
          </label>
        </fieldset>
        <fieldset>
          <legend>
            <strong>Radio buttons</strong>
          </legend>
          <label htmlFor="radio-1">
            <input
              type="radio"
              id="radio-1"
              name="radio"
              defaultValue="radio-1"
              defaultChecked
            />
            Radio button
          </label>
          <label htmlFor="radio-2">
            <input
              type="radio"
              id="radio-2"
              name="radio"
              defaultValue="radio-2"
            />
            Radio button
          </label>
        </fieldset>
        <fieldset>
          <legend>
            <strong>Switches</strong>
          </legend>
          <label htmlFor="switch-1">
            <input
              type="checkbox"
              id="switch-1"
              name="switch-1"
              role="switch"
              defaultChecked
            />
            Switch
          </label>
          <label htmlFor="switch-2">
            <input
              type="checkbox"
              id="switch-2"
              name="switch-2"
              role="switch"
            />
            Switch
          </label>
        </fieldset>
      </div>
      <input type="reset" defaultValue="Reset" />
      <input type="submit" defaultValue="Submit" />
    </form>
  )
}
