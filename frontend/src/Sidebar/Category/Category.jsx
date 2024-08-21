import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Running"
          title="Running"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Tennis"
          title="Tennis"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Casual"
          title="Casual"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Flats"
          title="Flats"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
