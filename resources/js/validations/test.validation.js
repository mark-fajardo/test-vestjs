import { create, test, enforce } from 'vest';

export const TestSuite = create((data) => {
    test('test_only', 'Test message if false', () => {
        enforce(data['test_only']).isTruthy();
    });
});
