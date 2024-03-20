import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firbase.confing";
import { toast } from "react-toastify";

export const firebaseUploadImage = (
  imageFile,
  setLoadingImg,
  setProgress,
  setImage
) => {
  setLoadingImg(true);

  const toastLoading = toast.loading("Saving Photo");

  const storageRef = ref(
    storage,
    `images/products/${Date.now()}-${imageFile.name}`
  );

  const uploadPhoto = uploadBytesResumable(storageRef, imageFile);

  uploadPhoto.on(
    "state_changed",
    (snapshot) => {
      setProgress(
        `${Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)}`
      );
    },
    (error) => {
      console.log(error);
      toast.update(toastLoading, {
        render: "Error while uploading,Try again",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      setImage(null);
      setTimeout(() => setLoadingImg(false), 2000);
    },
    () => {
      getDownloadURL(uploadPhoto.snapshot.ref).then((downloadUrl) => {
        setImage(downloadUrl);
        setLoadingImg(false);
        toast.update(toastLoading, {
          render: "Photo Upload Successfully",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      });
    }
  );
};

export const firebaseRemoveImage = (image, setImage) => {
  toast.info("Removieg Image", {
    autoClose: 1500,
    toastId: "remove-image",
  });
  const deleteRef = ref(storage, image);
  deleteObject(deleteRef)
    .then(() => {
      setImage(null);
      toast.success("Photo removes successfully", {
        autoClose: 2000,
      });
      console.log(1);
    })
    .catch(() => {
      toast.error("Error while removing image");
      console.log(error);
    });
};

export const firebaseDeleteImage = (image) => {
  const deleteRef = ref(storage, image);
  deleteObject(deleteRef)
    .then(() => {
      console.log("image deleted");
    })
    .catch(() => {
      console.log("somthing wrong in delete image");
    });
};
