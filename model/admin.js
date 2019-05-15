const mongoose= require('mongoose');

const adminSchema= mongoose.Schema({
    username: String,
    pass: String
});

const Admin= mongoose.model('Admin', adminSchema);

Admin.findOne().then(admin=>{
    if(!admin){
        const admin= new Admin({
            username: 'admin',
            pass: 'admin'
        });
        return admin.save();
    }
}).then(()=> console.log("admin created"))
.catch(err=> console.error(err));

module.exports= Admin;