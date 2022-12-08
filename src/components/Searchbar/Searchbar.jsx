import { Formik } from 'formik';
import {
  Input,
  SearchbarHeader,
  FormWr,
  Button,
  Label,
} from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';
// import PropTypes from 'prop-types';
const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <FormWr>
          <Button type="submit">
            <BiSearch />
            <Label>Search</Label>
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="true"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormWr>
      </Formik>
    </SearchbarHeader>
  );
};
// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
