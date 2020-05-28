import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

const control = document.querySelector('.controls');

const source$ = fromEvent(control, 'change').pipe(
    pluck('target')
);

source$.subscribe(element => {
    const suffix = element.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${element.name}`, element.value + suffix);
});