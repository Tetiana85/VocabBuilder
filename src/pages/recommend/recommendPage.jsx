import { useEffect, useRef, useState } from 'react';
import { RecommendPageContainer } from './recommendPage.styled';
import { ReactComponent as Switch } from '../../img/switch-horizontal.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, getAllWord } from '../../redux/data/data-operation';
import { useDictionaryHook } from 'components/hooks/dictyonaryHook';
import { debounce } from 'lodash';
import { PageButtonList } from 'components/pageButtonList/pageButtonList';
import { NavLink } from 'react-router-dom';
import { Table } from 'components/table/table';

export default function RecommendPage() {
  const dispatch = useDispatch();
  const {
    categories,
    customInputRef,
    inputRef,
    dropdownRef,
    capitalizeFirstLetter,
    toLowerCase,
  } = useDictionaryHook();
  const [formData, setFormData] = useState({
    filters: '',
    statistics: '',
    isIrregular: undefined,
    page: 1,
  });
  const [isVerb, setIsVerb] = useState(false);

  const allWords = useSelector((state) => state.data.allWords);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const delayedDispatchRef = useRef(
    debounce((formData) => {
      const modifiedFormData = {
        ...formData,
        statistics: toLowerCase(formData.statistics),
      };
      dispatch(getAllWord(modifiedFormData));
    }, 300)
  );

  useEffect(() => {
    delayedDispatchRef.current(formData);
  }, [formData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  const handleListItemClick = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      statistics: capitalizeFirstLetter(value.toLowerCase()),
    }));
    value.toLowerCase() === 'verb' ? setIsVerb(true) : setIsVerb(false);
  };

  const handleIsIrregularClick = (boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      isIrregular: boolean,
    }));
  };

  return (
    <RecommendPageContainer>
      <div className="FilterContainer">
        <form className="Form">
          <div className="SearchContainer">
            <input
              id="filters"
              className="Input"
              type="text"
              placeholder="Find the word"
              name="filters"
              value={formData.filters}
              onChange={handleInputChange}
            />
          </div>
          <div ref={customInputRef} className="custom-input">
            <input
              id="statistics"
              name="statistics"
              className="Input"
              type="text"
              placeholder="Categories"
              value={formData.statistics}
              onChange={handleInputChange}
              ref={inputRef}
            />
            <ul ref={dropdownRef} className="dropdown">
              {categories &&
                categories.map((item) => (
                  <li
                    className="ListItem"
                    key={item}
                    onClick={() => handleListItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <ul
            className="RadioButtonList"
            style={{ display: isVerb ? 'flex' : 'none' }}
          >
            <li className="RadioButtonItem">
              <input
                className="RadioButton"
                id="regular"
                name="regular"
                type="radio"
                onChange={() => handleIsIrregularClick(false)}
                checked={formData.isIrregular === false}
              />
              Regular
            </li>
            <li className="RadioButtonItem">
              <input
                className="RadioButton"
                id="reason"
                name="reason"
                type="radio"
                onChange={() => handleIsIrregularClick(true)}
                checked={formData.isIrregular === true}
              />
              Irregular
            </li>
          </ul>
        </form>
        <div className="CountContainer">
          <p className="CountWord">
            To study:
            <span className="NumberCountWord">
              {allWords.results && allWords.results.length}
            </span>
          </p>
          <ul className="ButtonList">
            <li>
              <NavLink className="ButtonItem" to="/training">
                Train oneself <Switch className="IconButton" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="TableContainer">
        {allWords ? (
          <Table data={allWords} />
        ) : (
          <div>Oooops samething wrong...</div>
        )}
      </div>
      {allWords.totalPages > 1 && (
        <PageButtonList
          data={allWords}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </RecommendPageContainer>
  );
}