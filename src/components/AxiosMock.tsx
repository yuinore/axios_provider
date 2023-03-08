class AxiosMock {
  get(url: string): AxiosMock {
    console.log(`[AxiosMock] Request ignored: GET ${url}`);
    return this;
  }

  post(url: string): AxiosMock {
    console.log(`[AxiosMock] Request ignored: POST ${url}`);
    return this;
  }

  delete(url: string): AxiosMock {
    console.log(`[AxiosMock] Request ignored: DELETE ${url}`);
    return this;
  }

  patch(url: string): AxiosMock {
    console.log(`[AxiosMock] Request ignored: PATCH ${url}`);
    return this;
  }

  then(callback: (res: { data: any }) => void): AxiosMock {
    return this;
  }

  catch(callback: (error: any) => void): AxiosMock {
    return this;
  }
}

export default AxiosMock;
