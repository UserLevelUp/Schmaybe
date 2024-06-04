import { SubjectModel } from "./subject-model.model";


describe('SubjectModel', () => {
  it('should create an instance', () => {
    expect(new SubjectModel("testalhpa", true)).toBeTruthy();
  });
});
