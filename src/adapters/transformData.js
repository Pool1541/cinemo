export function setLinks(response) {
  const tempData = { ...response.data };
  const url = response.config.url;
  const numPage = tempData.page;

  if (numPage < tempData.total_pages) {
    const currentPage = url.substring(0);
    const nextPage = currentPage.replace(
      `&page=${numPage}`,
      `&page=${numPage + 1}`
    );
    tempData.next_page = nextPage;
  } else {
    tempData.next_page = null;
  }
  if (numPage > 1) {
    const currentPage = url.substring(0);
    const prevPage = currentPage.replace(
      `&page=${numPage}`,
      `&page=${numPage - 1}`
    );
    tempData.previous_page = prevPage;
  } else {
    tempData.previous_page = null;
  }

  return tempData;
}
