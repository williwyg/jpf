
interface HTMLElement {
    data: any;
    onselectstart: () => void;
    attachEvent: (event: string, handler: (event: Event) => void) => void;
}