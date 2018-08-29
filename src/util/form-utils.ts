export const inputParsers: any = {
  date(input: any) {
    const [month, day, year] = input.split('/');
    return `${year}-${month}-${day}`;
  },
  uppercase(input: any) {
    return input.toUpperCase();
  },
  number(input: any) {
    return parseFloat(input);
  },
};

export const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export function handleFormSubmit(
  e: React.FormEvent<EventTarget>
): Promise<Response> {
  e.preventDefault();
  const form = e.target as HTMLFontElement;
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name'),
      ...this.state,
    }),
  });
}

/*
export function handleFormSubmit(
  event: React.FormEvent<EventTarget>
): Promise<Response> {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const data = new FormData(form);

  for (let name of (data as any).keys()) {
    const input = form.elements[name];
    const parserName = (input as any).dataset.parse;

    if (parserName) {
      const parser = inputParsers[parserName];
      const parsedValue = parser(data.get(name));
      data.set(name, parsedValue);
    }
  }

  //this is used by netlify
  data.set('form-name', form.getAttribute('name'));

  //submit data url encoded for netlify since they don't handle JSON body
  const url = new URLSearchParams(data as any).toString();

  return fetch(form.action, {
    method: 'POST',
    body: url,
  });
}
*/
