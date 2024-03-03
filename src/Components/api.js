export async function getpostOffice(pinCode) {
    try {
        if (!pinCode.trim()) {
            throw new Error("Please enter city name");
        }
        const response = await fetch(`https://api.postalpincode.in/pincode/${pinCode}`);
        const data = await response.json();
        return { status: "success", data }
    }
    catch (error) {
        return { status: "error", data: error.message || "Something went wrong" };
    }
}