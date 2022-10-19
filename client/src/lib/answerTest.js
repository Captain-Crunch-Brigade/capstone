import renderer from 'react-test-renderer';
import Answer from '../components/QnAWidget/Answer';

it('renders an answer based on inputed object', () => {
  const ansObj = {
    answerer_name: "someDude34",
    body: "generic answer",
    date: "2022-09-09T00:00:00.000Z",
    helpfulness: 3,

  }
  const component = renderer.create(
    <Answer answer={"answerer_name": "someDude34",
      "body": "generic answer",
      "date": "2022-09-09T00:00:00.000Z",
      "helpfulness": 3,
    } />
  );
  let tree = component.toJson();
  expect(tree).toMatchSnapshot();


})
