const baseUrl = import.meta.env.VITE_API_URL;

export type ResponseBody<T> = {
  ok: boolean;
  data: T | null;
};

export async function Get<T>(
  url: string,
  data?: any,
  headers?: any
): Promise<ResponseBody<T>> {
  try {
    const query_string = _toQueryString(data ?? {});
    const rst = await fetch(baseUrl + url + "?" + query_string, {
      headers,
      method: "GET",
    });
    if (rst.ok) {
      return {
        ok: true,
        data: (await rst.json()) as T,
      };
    } else {
      console.warn(`[Warn] Fetch ${url} failed! `);
      return {
        ok: false,
        data: null,
      };
    }
  } catch (err) {
    console.error(`[Error] Fetch ${url} failed! `, err);
    return {
      ok: false,
      data: null,
    };
  }
}

export async function Post<T>(
  url: string,
  data?: RequestInit
): Promise<ResponseBody<T>> {
  try {
    const rst = await fetch(baseUrl + url, {
      ...data,
      method: "POST",
    });
    if (rst.ok) {
      return {
        ok: true,
        data: (await rst.json()) as T,
      };
    } else {
      console.warn(`[Warn] Fetch ${url} failed! `);
      return {
        ok: false,
        data: null,
      };
    }
  } catch (err) {
    console.error(`[Error] Fetch ${url} failed! `, err);
    return {
      ok: false,
      data: null,
    };
  }
}

export const _toQueryString = (obj: { [x: string]: string | number }) => {
  const str: string[] = [];
  Object.keys(obj).forEach((k) => {
    str.push(k + "=" + obj[k]);
  });
  return str.join("&");
};
