import test from 'ava';
import fn from './';

test(t => {
	t.true(fn(new Date(), new Date()));
	t.true(fn(new Date().getTime() / 1000, new Date()));
	t.false(fn(new Date(), new Date(new Date() - (1000 * 60 * 60 * 24 * 7))));
	t.throws(() => fn('foo', new Date()), 'Expected a number or Date, got string');
	t.throws(() => fn(new Date(), 'foo'), 'Expected a number or Date, got string');
});
