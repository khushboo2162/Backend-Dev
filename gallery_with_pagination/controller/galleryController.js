export const showGallery=(req, res) => {
    const page = parseInt(req.query.page) || 1;   // current page
    const limit = 4;    
    const totalPages=Math.ceil(files.length/limit);                          // images per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedFiles = files.slice(startIndex, endIndex);

    res.render("index", {
        images: paginatedFiles,
        currentPage: page,
        totalPages});
    };
